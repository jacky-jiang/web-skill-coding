const VSHADER_SOURCE = 
  `attribute vec4 a_Position;\n
   attribute float a_PointSize;\n
   void main() {\n
     gl_Position = a_Position;\n
     gl_PointSize = a_PointSize;\n
   }\n`;

const FSHADER_SOURCE = 
  `void main() {\n
     gl_FragColor = vec4(0.3, 1.0, 0.3, 1.0); \n
  }\n`;

export {
  VSHADER_SOURCE,
  FSHADER_SOURCE
}
