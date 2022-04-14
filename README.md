# Air-Pollution-Analyzer

Air Pollution Analyzer is a project to predict the %people affected in the years(2007-2030) using GUI and also shows the preventive measures and their effectiveness using graphs.
The project is made on ReactJS environment.

Check it out live: https://air-pollution-beta.vercel.app/

## Features

- Navigation Bar and a Footer
- Dynamic and Static Graphs
- Responsive Design
- Prediction of Future Data [Accroding to Problem Dataset]

## Math Logic

- As the "% of people affected" increases linearly with the years. We can use a straight line equation to determine for other years.

```bash
  y = mx + c; m: slope, c: y intercept
```

| S.n | x values (years) | y values (predictions) |
| --- | ---------------- | ---------------------- |
| 1   | 2010             | 12.4                   |
| 2   | 2016             | 16.4                   |

```bash
  m (slope) = (y2 - y1) / (x2-x1)
  = (16.4 - 12.4) / (2016-2010)
  = 4/6
```

```bash
  Equation of a Line:
                    (Y - y1) = m (X - x1)
  Therefore:
                    Y = (4/6) (X - 2010) + 12.4 [Where X: year & Y: prediction]
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/adarsharma-in/air-pollution
```

Go to the project directory

```bash
  cd air-pollution
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Technologies Used

- [ReactJS](https://reactjs.org/): React makes it painless to create interactive UIs.
- [ChartJS](https://www.chartjs.org/): Simple yet flexible JavaScript charting for designers & developers
- [Tailwind CSS](https://tailwindcss.com/): Rapidly build modern websites without ever leaving your HTML.

Server : Nodejs

## Data Sources

All the data sources are mentioned here:

https://air-pollution-beta.vercel.app/sources
