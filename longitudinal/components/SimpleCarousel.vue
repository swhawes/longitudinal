<template>
  <div class="carousel-container">
    <input type="radio" name="position" checked />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />

    <main id="carousel">
      <div class="item">
        <h2>Nested Models</h2>
        <p>
          Include random effects at multiple levels for within-group and
          between-group variability.
        </p>
      </div>
      <div class="item">
        <h2>Time-Varying Covariates</h2>
        <p>
          Model how changes in covariates like stress or income influence
          outcomes over time.
        </p>
      </div>
      <div class="item">
        <h2>Interaction Terms</h2>
        <p>
          Examine how predictor effects vary using interaction terms in random
          slopes.
        </p>
      </div>
      <div class="item">
        <h2>Model Selection</h2>
        <p>
          Use AIC, BIC, or penalization techniques to choose the best model.
        </p>
      </div>
      <div class="item">
        <h2>Bayesian Models</h2>
        <p>
          Bayesian methods offer flexible alternatives for linear mixed models.
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.carousel-container {
  height: auto;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

main#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 80vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: 1;
  pointer-events: none;
  margin-bottom: 20px;
}

div.item {
  position: absolute;
  width: 280px;
  height: 350px;
  padding: 15px;
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
}

div.item:nth-of-type(1) {
  --offset: 1;
  background-color: #34495e; /* Original color for card 1 */
}

div.item:nth-of-type(2) {
  --offset: 2;
  background-color: #426374; /* New gradient color between card 1 and 5 */
}

div.item:nth-of-type(3) {
  --offset: 3;
  background-color: #52908a; /* New gradient color between card 1 and 5 */
}

div.item:nth-of-type(4) {
  --offset: 4;
  background-color: #63a59d; /* New gradient color between card 1 and 5 */
}

div.item:nth-of-type(5) {
  --offset: 5;
  background-color: #1abc9c; /* Color of card 3 moved to card 5 */
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  margin-top: 10px;
  text-align: center;
}

p {
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
  color: #ecf0f1;
}

input {
  color: #00dc82;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 0 5px;
}

input:nth-of-type(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ main#carousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ main#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 4 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ main#carousel {
  --position: 3;
}

input:nth-of-type(4) {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
input:nth-of-type(4):checked ~ main#carousel {
  --position: 4;
}

input:nth-of-type(5) {
  grid-column: 6 / 7;
  grid-row: 2 / 3;
}
input:nth-of-type(5):checked ~ main#carousel {
  --position: 5;
}
</style>
