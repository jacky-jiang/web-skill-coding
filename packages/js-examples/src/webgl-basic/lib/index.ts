import { FRAGMENT_SHADER, VERTEX_SHADER } from "../types";

function getWebGLContext(canvas: HTMLCanvasElement): WebGL2RenderingContext {
  let conext: WebGL2RenderingContext = null;
  if(canvas) {
    conext = canvas.getContext('webgl2');
  }
  return conext;
}

function initShaders(gl: WebGL2RenderingContext, vshader: string, fshader: string): boolean {
  const program = createProgram(gl, vshader, fshader);

  if (!program) {
    console.error('Failed to create program');
    return false;
  }

  gl.useProgram(program);
  gl.program = program;
  return true;
}

/**
 * Create the linked program object
 */
function createProgram(gl: WebGL2RenderingContext, vshader: string, fshader: string): WebGLProgram {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  // create a program object
  const program = gl.createProgram();

  if (!program) {
    return null;
  }

  // Attach the shader object
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // link the program object
  gl.linkProgram(program);

  // check the result of linking
  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!linked) {
    const error = gl.getProgramInfoLog(program);
    console.error('Failed to link program', error);
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(frameElement);

    return null;
  }
  
  return program;
}

function loadShader(gl: WebGL2RenderingContext, type: VERTEX_SHADER | FRAGMENT_SHADER, source: string): WebGLShader {
  if (!gl) {
    // throw new Error('gl is null');
    return null;
  }
  const shader: WebGLShader = gl.createShader(type);
  if (shader == null) {
    // throw new Error('unable to create shader');
    return null;
  }

  // set the shader program
  gl.shaderSource(shader, source);

  // compile the shader
  gl.compileShader(shader);

  // check the result of compilation
  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!compiled) {
    const error = new Error(gl.getShaderInfoLog(shader));
    console.error(error);
    gl.deleteShader(shader);
    // throw error;
    return null;
  }

  return shader;
}

export {
  getWebGLContext,
  initShaders,
}
