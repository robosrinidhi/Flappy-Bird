import {interval, merge, combineLatest, fromEvent} from 'rxjs';
import {tap, scan, takeWhile} from 'rxjs/operators';
import {paint} from './html-renderer';

const gamePipe = (x,y) => ({x, y, checked: false});
console.log(gamePipe);