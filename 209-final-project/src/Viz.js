import React, { PropTypes } from 'react';
import {createClassFromSpec} from 'react-vega';

const FFASpec = require('./specs/final-four-appearances.json')

export default createClassFromSpec('FFABarChart', FFASpec);