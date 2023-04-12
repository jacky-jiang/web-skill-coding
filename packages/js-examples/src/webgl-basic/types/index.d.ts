export function getWebGLContext(canvas: HTMLCanvasElement): WebGL2RenderingContext;

export type VERTEX_SHADER = WebGLRenderingContext["VERTEX_SHADER"];
export type FRAGMENT_SHADER = WebGLRenderingContext["FRAGMENT_SHADER"];

declare global {
  interface WebGL2RenderingContext {
    program: WebGLProgram
  }
}
