import { VSHADER_SOURCE, FSHADER_SOURCE } from "./shader";
import { getWebGLContext, initShaders } from "./lib";

function main() {
  console.log('webgl basic main');
  const canvasEl: HTMLCanvasElement = document.getElementById('webgl') as HTMLCanvasElement
  const gl = getWebGLContext(canvasEl);
  
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to initialize shader');
    return;
  }

  const a_Position = gl.getAttribLocation(gl.program, 'a_Position');

  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  // pass vertex position to attribute variable
  gl.vertexAttrib3f(a_Position, 0.5, 0.2, 0.2);

  // specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // draw
  gl.drawArrays(gl.POINTS, 0, 1);
}

export {
  main,
}
