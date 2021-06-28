import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private canvas: any;
  number = 0;

  backgroundColor = '#f8f8f8';
  lineStroke = '#ebebeb';
  tableFill = 'rgba(150, 111, 51, 0.7)';
  tableStroke = '#694d23';
  tableShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
  chairFill = 'rgba(67, 42, 4, 0.7)';
  chairStroke = '#32230b';
  chairShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
  barFill = 'rgba(0, 93, 127, 0.7)';
  barStroke = '#003e54';
  barShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
  barText = 'Bar';
  wallFill = 'rgba(136, 136, 136, 0.7)';
  wallStroke = '#686868';
  wallShadow = 'rgba(0, 0, 0, 0.4) 5px 5px 20px';

  constructor() { }



  ngOnInit() {
    console.log('Hello world');
    this.canvas = new fabric.Canvas('canvas', {
      // backgroundImage: '../assets/images/workspace.png',
      hoverCursor: 'pointer',
      selection: true,
      selectionBorderColor: 'blue'
    });
    console.log(this.canvas);

    this.canvas.setBackgroundImage('../assets/images/workspace.png', this.canvas.renderAll.bind(this.canvas), {
      // Needed to position backgroundImage at 0/0
      originX: 'left',
      originY: 'top'
    });

    this.canvas.setWidth(2587);
    this.canvas.setHeight(1438);
    this.canvas.renderAll();
    
    let self = this;

    this.canvas.on({
      'mouse:up': (e) => {
        this.myfunction(e)
      }
    })

    this.addDefaultObjects();

    // this.canvas.on('mouse:wheel', function(opt) {
    //   var delta = opt.e.deltaY;
    //   console.log(self.canvas);
    //   var zoom = self.canvas.getZoom();
    //   zoom *= 0.999 ** delta;
    //   if (zoom > 20) zoom = 20;
    //   if (zoom < 0.01) zoom = 0.01;
    //   self.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    //   opt.e.preventDefault();
    //   opt.e.stopPropagation();
    // })
  }

  myfunction(e) {
    console.log(e);
  }

  addChair(left, top, width?: number, height?: number) {
    const o = new fabric.Rect({
      left: left,
      top: top,
      width: 30,
      height: 30,
      fill: 'rgba(67, 42, 4, 0.7)',
      stroke: '#32230b',
      strokeWidth: 2,
      shadow: 'rgba(0, 0, 0, 0.4) 3px 3px 7px',
      originX: 'left',
      originY: 'top',
      centeredRotation: true,
      snapAngle: 45,
      selectable: true,
      type: 'chair'
    })
    this.canvas.add(o)
    return o
  }

  addRect(left, top, width, height) {
    const id = this.generateId()
    const o = new fabric.Rect({
      width: width,
      height: height,
      fill: this.tableFill,
      stroke: this.tableStroke,
      strokeWidth: 2,
      shadow: this.tableShadow,
      originX: 'center',
      originY: 'center',
      centeredRotation: true,
      snapAngle: 45,
      selectable: true
    })
    o["id"] = id;
    const t = new fabric.IText(this.number.toString(), {
      fontFamily: 'Calibri',
      fontSize: 14,
      fill: '#fff',
      textAlign: 'center',
      originX: 'center',
      originY: 'center'
    })
    const g = new fabric.Group([o, t], {
      left: left,
      top: top,
      centeredRotation: true,
      snapAngle: 45,
      selectable: true,
      type: 'table'
    })
    g["id"] = id;
    this.canvas.add(g)
    this.number++
    return g
  }

  generateId() {
    return Math.random().toString(36).substr(2, 8)
  }

  addDefaultObjects() {
    this.addChair(15, 105);
    this.addChair(15, 135)
    this.addChair(75, 105)
    this.addChair(75, 135)
    this.addChair(225, 75)
    this.addChair(255, 75)
    this.addChair(225, 135)
    this.addChair(255, 135)
    this.addChair(225, 195)
    this.addChair(255, 195)
    this.addChair(225, 255)
    this.addChair(255, 255)
    this.addChair(15, 195)
    this.addChair(45, 195)
    this.addChair(15, 255)
    this.addChair(45, 255)
    this.addChair(15, 315)
    this.addChair(45, 315)
    this.addChair(15, 375)
    this.addChair(45, 375)
    this.addChair(225, 315)
    this.addChair(255, 315)
    this.addChair(225, 375)
    this.addChair(255, 375)
    this.addChair(15, 435)
    this.addChair(15, 495)
    this.addChair(15, 555)
    this.addChair(15, 615)
    this.addChair(225, 615)
    this.addChair(255, 615)
    this.addChair(195, 495)
    this.addChair(195, 525)
    this.addChair(255, 495)
    this.addChair(255, 525)
    this.addChair(225, 675)
    this.addChair(255, 675)

    this.addRect(30, 90, 60, 90)
    this.addRect(210, 90, 90, 60)
    this.addRect(210, 210, 90, 60)
    this.addRect(0, 210, 90, 60)
    this.addRect(0, 330, 90, 60)
    this.addRect(210, 330, 90, 60)
    this.addRect(0, 450, 60, 60)
    this.addRect(0, 570, 60, 60)
    this.addRect(210, 480, 60, 90)
    this.addRect(210, 630, 90, 60)

    // this.addBar(120, 0, 180, 60)

  }

}
