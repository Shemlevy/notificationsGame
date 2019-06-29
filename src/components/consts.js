import { loveImages } from '../belongAssets';
import { esteemImages } from '../esteemAssets';
import { safetyImages } from '../safetyAssets';
import { growthImages } from '../growthAssets';
import { energyImages } from '../energyAssets';
import { sounds } from '../sounds';

export const BOX_HEIGHT = 70;
export const BOX_WIDTH = 350;

const growth = {
  color: '#FF7CA9',
  title: 'growth',
  sound: new Audio(sounds.growth),
  notifications: [{ img: growthImages.bad1, type: 'bad' },{ img: growthImages.bad2, type: 'bad' },{ img: growthImages.bad3, type: 'bad' },{ img: growthImages.bad4, type: 'bad' },{ img: growthImages.bad5, type: 'bad' },{ img: growthImages.bad6, type: 'bad' },{ img: growthImages.good1, type: 'good' },{ img: growthImages.good2, type: 'good' },{ img: growthImages.good3, type: 'good' },{ img: growthImages.good4, type: 'good' },{ img: growthImages.good5, type: 'good' },{ img: growthImages.good6, type: 'good' }],
};

const esteem = {
  color: '#FFC917',
  title: 'esteem',
  sound: new Audio(sounds.esteem),
  notifications: [{ img: esteemImages.bad1, type: 'bad' },{ img: esteemImages.bad2, type: 'bad' },{ img: esteemImages.bad3, type: 'bad' },{ img: esteemImages.bad4, type: 'bad' },{ img: esteemImages.bad5, type: 'bad' },{ img: esteemImages.bad6, type: 'bad' },{ img: esteemImages.good1, type: 'good' },{ img: esteemImages.good2, type: 'good' },{ img: esteemImages.good3, type: 'good' },{ img: esteemImages.good4, type: 'good' },{ img: esteemImages.good5, type: 'good' },{ img: esteemImages.good6, type: 'good' }],
};

const belong = {
  color: '#FF414F',
  title: 'belong',
  sound: new Audio(sounds.love),
  notifications: [{ img: loveImages.bad1, type: 'bad' },{ img: loveImages.bad2, type: 'bad' },{ img: loveImages.bad3, type: 'bad' },{ img: loveImages.bad4, type: 'bad' },{ img: loveImages.bad5, type: 'bad' },{ img: loveImages.bad6, type: 'bad' },{ img: loveImages.good1, type: 'good' },{ img: loveImages.good2, type: 'good' },{ img: loveImages.good3, type: 'good' },{ img: loveImages.good4, type: 'good' },{ img: loveImages.good5, type: 'good' },{ img: loveImages.good6, type: 'good' }],
};

const safety = {
  color: '#535AFF',
  title: 'safety',
  sound: new Audio(sounds.safety),
  notifications: [{ img: safetyImages.bad1, type: 'bad' },{ img: safetyImages.bad2, type: 'bad' },{ img: safetyImages.bad3, type: 'bad' },{ img: safetyImages.bad4, type: 'bad' },{ img: safetyImages.bad5, type: 'bad' },{ img: safetyImages.bad6, type: 'bad' },{ img: safetyImages.good1, type: 'good' },{ img: safetyImages.good2, type: 'good' },{ img: safetyImages.good3, type: 'good' },{ img: safetyImages.good4, type: 'good' },{ img: safetyImages.good5, type: 'good' },{ img: safetyImages.good6, type: 'good' }],
};

const energy = {
  color: '#77FFFB',
  title: 'energy',
  sound: new Audio(sounds.energy),
notifications: [{ img: energyImages.bad1, type: 'bad' },{ img: energyImages.bad2, type: 'bad' },{ img: energyImages.bad3, type: 'bad' },{ img: energyImages.bad4, type: 'bad' },{ img: energyImages.bad5, type: 'bad' },{ img: energyImages.bad6, type: 'bad' },{ img: energyImages.good1, type: 'good' },{ img: energyImages.good2, type: 'good' },{ img: energyImages.good3, type: 'good' },{ img: energyImages.good4, type: 'good' },{ img: energyImages.good5, type: 'good' },{ img: energyImages.good6, type: 'good' }],
};

export const skills = [growth,esteem,belong,safety,energy];
export const barUpSound = new Audio(sounds.barUp);
export const barDownSound = new Audio(sounds.barDown);
export const trashSounds = new Audio(sounds.trash);