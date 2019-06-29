import React from 'react';
import { TextProgress } from './style';
import { skills } from '../consts';

const Skills = ({ skillsProgress }) =>
    skills.map((skill) =>
      <TextProgress key={skill.title} color={skill.color} progress={skillsProgress[skill.title]}>{skill.title}</TextProgress>
    );

export default Skills;