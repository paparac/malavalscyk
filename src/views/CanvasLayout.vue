<template>
  <canvas id="canvas-layout" :width="width" :height="height"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CanvasLayout",

  setup() {
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    return { width, height };
  },

  mounted() {
    const canvas = document.querySelector(
      "#canvas-layout"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    class Circle {
      x: number;
      y: number;
      radius: number;
      bgColor: string;

      constructor(x = 0, y = 0, radius = 10, bgColor = "red") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.bgColor = bgColor;
      }

      create() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.bgColor;
        ctx.fill();
        ctx.closePath();
        return this;
      }

      change(
        x = this.x,
        y = this.y,
        radius = this.radius,
        bgColor = this.bgColor
      ) {
        this.x = x > ctx.canvas.width ? 0 : x < 0 ? ctx.canvas.width : x;
        this.y = y > ctx.canvas.height ? 0 : y < 0 ? ctx.canvas.height : y;
        this.radius = radius;
        this.bgColor = bgColor;
        this.create();
      }
    }

    const red = new Circle(
      Number(this.width) / 2,
      Number(this.height) / 2,
      10,
      "#c27171"
    );

    const green = new Circle(
      Number(this.width) / 2 + 130,
      Number(this.height) / 2 + 130,
      15,
      "#88c271"
    );

    const blue = new Circle(
      Number(this.width) / 2 - 130,
      Number(this.height) / 2 - 130,
      13,
      "#7184c2"
    );

    const violet = new Circle(35, 35, 13, "#9b71c2");

    const random = (min = -10, max = 10) => {
      return Math.random() * (max - min) + min;
    };

    setInterval(() => {
      red.change(red.x + random(), red.y + random());
    }, 3);

    setInterval(() => {
      green.change(green.x + random(-5, 5), green.y + random(-5, 5));
    }, 5);

    setInterval(() => {
      blue.change(blue.x + random(-25, 25), blue.y + random(-20, 20));
    }, 25);

    setInterval(() => {
      violet.change(violet.x + random(-25, 25), violet.y + random(-20, 20));
    }, 25);
  },
});
</script>
