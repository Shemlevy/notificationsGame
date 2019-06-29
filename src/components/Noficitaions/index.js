import React, { useState } from 'react';
import { Swipeable } from "react-swipeable";


import { NotificationBox } from './style';
import { skills, barUpSound, barDownSound, trashSounds } from '../consts';
import { useInterval, getRandomInt, getY, getX } from '../utilis';
import Skills from '../Skills';

export const Notifications = () => {
  //Hooks state
  const [delay, setDelay] = useState(2000);
  const [gameTempo, setGameTempo] = useState(10000);
  const [notifications, setRemainNotifications] = useState([...Array(48).keys()]);
  const [locations, setLocations] = useState([{ x:getX(), y:getY() }]);
  const [currNotifications, setCurrNotifications] = useState([{ 0:'4', 1:'9'}]);
  const [animation ,setAnimation] = useState('');
  const [skillsProgress, setSkillsProgress] = useState({
    growth: 10,
    belong: 10,
    esteem: 10,
    safety: 10,
    energy: 10,
  });

  useInterval(() => {
    setLocations([
      ...locations,
      {
        x: getX(),
        y: getY()
      }
    ]);
    const notificationNumber = notifications[getRandomInt(notifications.length)].toString();
    const nextNotification = (notificationNumber.length === 1)
      ? {
      0: '0',
      1: notificationNumber
    } : {
      0: notificationNumber[0],
      1: notificationNumber[1]
    };

   setCurrNotifications([
      ...currNotifications,
     nextNotification
      ]);
    if (currNotifications.length === 60) {
      setDelay(null);
      setGameTempo(null);
    }

    setRemainNotifications(notifications.filter((_, idx) => idx !== +notificationNumber));
  }, delay);

  // Make it faster every second!
  useInterval(() => {
    if (delay > 4000) {
      setDelay(delay / 1.5);
    }
  }, gameTempo);


  const onSwipedLeft = (type, category, notification) => {
    const isRight = type === 'good';
    setCurrNotifications(currNotifications.filter((_,idx) => idx !== notification));
    setLocations(locations.filter((_,idx) => idx !== notification));
    const newProgress = skillsProgress[category] + (isRight ? 10 : -10);
    setSkillsProgress({
      ...skillsProgress,
      [category]: newProgress >= 10 ? newProgress : 10
    });
    isRight ? barUpSound.play() : barDownSound.play();
  };

  const onSwipedRight = (type, category, notification) => {
    setCurrNotifications(currNotifications.filter((_,idx) => idx !== notification));
    setLocations(locations.filter((_,idx) => idx !== notification));
    trashSounds.play();
  }



  return (
    <>
      <Skills skillsProgress={skillsProgress} />
      {
        locations.map((location, idx) => {
          if (!currNotifications[idx]) return null;
          const currSkill = skills[currNotifications[idx][0]];
          const src = currSkill.notifications[currNotifications[idx][1]].img;
          const sound = skills[currNotifications[currNotifications.length - 1][0]].sound;
          sound.play();
          const notificationType = currSkill.notifications[currNotifications[idx][1]].type;
          const category = currSkill.title;
          return (
              <Swipeable
                key={idx}
                trackMouse
                preventDefaultTouchmoveEvent
                onSwipedLeft={() => onSwipedLeft(notificationType, category, idx)}
                onSwipedRight={() => onSwipedRight(notificationType, category, idx)}
              >
              <NotificationBox top={location.x} left={location.y}>
                <img src={src} style={{width:'350px'}} />
              </NotificationBox>
            </Swipeable>
          )
        })
      }
    </>
  );
};

