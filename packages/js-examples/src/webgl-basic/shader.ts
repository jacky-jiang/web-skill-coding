const VSHADER_SOURCE = 
  `attribute vec4 a_Position;\n
   void main() {\n
     gl_Position = a_Position;\n
     gl_PointSize = 10.0;\n
   }\n`;

const FSHADER_SOURCE = 
  `void main() {\n
     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); \n
  }\n`;

export {
  VSHADER_SOURCE,
  FSHADER_SOURCE
}
