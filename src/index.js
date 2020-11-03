import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './controller/application';
import { ThemeProvider } from '@chakra-ui/core';
import {chakraTheme} from './controller/settingChakra';

ReactDOM.render(<ThemeProvider theme={chakraTheme}> <Application /> </ThemeProvider>, document.getElementById('root'));
console.log(chakraTheme);