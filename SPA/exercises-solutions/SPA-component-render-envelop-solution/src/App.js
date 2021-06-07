import React from 'react'

import Envelope from './Components/Envelope';

import './CSS/minireset.min.css';

const fromPerson = {
  fullName: 'Julian Perge',
  address: '123 Blank Street',
  cityStateZip: 'Columbus, OH 43203',
};

const toPerson = {
  fullName: 'Perge Julian',
  address: '321 Blank Street',
  cityStateZip: 'San Francisco, CA 43204',
};

export default function App() {
    return (
        <Envelope fromPerson={fromPerson} toPerson={toPerson} />
    )
}
