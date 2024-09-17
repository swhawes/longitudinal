<style>
  /* Basic styling for the tabs */
  .tab-content {
    display: none;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    margin-top: -1px;
  }

  .tab-label {
    display: inline-block;
    padding: 10px 20px;
    margin-right: 5px;
    cursor: pointer;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
  }

  .tab-label:hover {
    background-color: #ddd;
  }

  /* Style the active tab */
  input[type="radio"]:checked + .tab-label {
    background-color: #00dc82;
    color: white;
  }

  /* Show the content that corresponds to the checked tab */
  input[type="radio"]:checked + .tab-label + .tab-content {
    display: block;
  }

  /* Hide the radio buttons */
  input[type="radio"] {
    display: none;
  }
</style>

<div>
  <!-- Tab for Data Generation -->
  <input type="radio" id="tab1" name="tabs" checked>
  <label class="tab-label" for="tab1">Generate Data</label>
  <div class="tab-content">
    <h3>Generating the Dataset</h3>
    <p class="text-slate-700">We'll start by generating a simple dataset for this tutorial.</p>
    <pre><code>

```r
# Generate a simple dataset
set.seed(123)
data <- data.frame(
  SubjectID = rep(1:5, each = 4),
  Time = rep(0:3, times = 5),
  Outcome = c(100, 105, 110, 115, 95, 100, 105, 110, 90, 95, 100, 105, 85, 90, 95, 100, 80, 85, 90, 95)
)

# View the first few rows
head(data)
```

</code></pre>
</div> <!-- Tab for Fitting Model --> <input type="radio" id="tab2" name="tabs"> <label class="tab-label" for="tab2">Fitting Model</label> <div class="tab-content"> <h3>Fitting Linear Mixed-Effects Models</h3> <p>We'll fit a random intercept model using the <code>lme4</code> package.</p> 
<pre><code>

```r
# Load necessary libraries
library(lme4)

# Fit a random intercept model
model1 <- lmer(Outcome ~ Time + (1 | SubjectID), data = data)

# Display model summary to examine fixed and random effects
summary(model1)
```

</code></pre>
</div> <!-- Tab for Model Diagnostics --> <input type="radio" id="tab3" name="tabs"> <label class="tab-label" for="tab3">Model Diagnostics</label> <div class="tab-content"> <h3>Model Diagnostics and Visualization</h3> <p>Now, let's assess how well the model fits the data and visualize the output.</p> 
<pre><code>

```r
# Comparing model fit
AIC(model1)
plot(model1)
```

</code></pre>
</div> <!-- Tab for Visualization --> <input type="radio" id="tab4" name="tabs"> <label class="tab-label" for="tab4">Visualization</label> <div class="tab-content"> <h3>Visualizing Growth Trajectories</h3> <p>We'll use <code>ggplot2</code> to visualize the raw data and the fitted model.</p> 
<pre><code>

```r
# Load ggplot2 library
library(ggplot2)

# Plot raw data
ggplot(data, aes(x = Time, y = Outcome, color = factor(SubjectID))) +
  geom_point() +
  geom_smooth(method = "lm", se = FALSE) +
  labs(
    title = "Raw Data: Individual Growth Trajectories",
    x = "Time (years)",
    y = "Outcome",
    color = "Subject ID"
  )
```

</code></pre>
</div> </div> ```