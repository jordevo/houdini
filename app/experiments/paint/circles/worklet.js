class CirclesPainter {

  paint(ctx, geom, props) {
    console.log('paint render');
    const offset = 4;
    const count = 6;
    const opacity = 1;
    const size = Math.min(geom.width, geom.height);
    const radius = Math.max(Math.round(((size / count) - offset * 2) / 2), 10);
    const point = radius + offset;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        ctx.strokeStyle = `rgba(${Math.floor(255 - 42.5 * i)},
          0,
          ${Math.floor(255 - 42.5 * j)},
          ${opacity})`;

        ctx.beginPath();
        ctx.arc(point + (i * (point * 2)), point + (j * (point * 2)), radius, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  }
}

registerPaint('circles', CirclesPainter);