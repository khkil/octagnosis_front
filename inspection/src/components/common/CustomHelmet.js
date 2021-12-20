import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';

const CustomHelmet = ({ title }) => {

  const fullTitle = useMemo(() => `옥타그노시스 - ${title}`, [title]);
  return (
    <Helmet title={fullTitle}/>
  )
}

export default CustomHelmet;