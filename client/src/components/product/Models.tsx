import React from 'react';
import Model from './Model';
interface ChildProps{
    data: {id: string, name: string}[];
}

const Models: React.FC<ChildProps> = ({data}) => {
  return <div className="sizes-box">{data.map((m) => {return <Model id={m.id} name={m.name}/>})}</div>;
};

export default Models;