console.log('web codecs page');

// @ts-ignore
let imageDecoder: ImageDecoder = null;
let imageIndex = 0;

function renderImage(result: unknown) {
  const canvas = document.querySelector("canvas");
  const canvasContext = canvas.getContext("2d");
  // @ts-ignore
  canvasContext.drawImage(result.image, 0, 0);

  const track = imageDecoder.tracks.selectedTrack;

  // We check complete here since `frameCount` won't be stable until all
  // data has been received. This may cause us to receive a RangeError
  // during the decode() call below which needs to be handled.
  if (imageDecoder.complete) {
    if (track.frameCount === 1) return;

    if (imageIndex + 1 >= track.frameCount) imageIndex = 0;
  }

  // Decode the next frame ahead of display so it's ready in time.
  imageDecoder
    .decode({ frameIndex: ++imageIndex })
    .then((nextResult: unknown) =>
      setTimeout(() => {
        renderImage(nextResult);
        // @ts-ignore
      }, result.image.duration / 1000.0)
    )
    .catch((e: unknown) => {
      // We can end up requesting an imageIndex past the end since
      // we're using a ReadableStream from fetch(), when this happens
      // just wrap around.
      if (e instanceof RangeError) {
        imageIndex = 0;
        imageDecoder.decode({ frameIndex: imageIndex }).then(renderImage);
      } else {
        throw e;
      }
    });
}

function decodeImage(imageByteStream: unknown) {
  // @ts-ignore
  imageDecoder = new ImageDecoder({ data: imageByteStream, type: "image/gif" });
  console.log('image', imageDecoder)
  imageDecoder.decode({ frameIndex: imageIndex }).then(renderImage);
}

fetch("https://mogic-spider.getmogic.com/jy/6895938910275390728.gif").then((response) => {
  // return response.blob()
  decodeImage(response.body)
})
