//imports
import PieChart from "./PieChart";

//declaring dataset for piechart
const data = {
  labels: [
    "No Smoking",
    "Avoiding Pollutant Exposure",
    "Prevent Infection",
    "Regular Check-Ups",
    "Exercise",
  ],
  datasets: [
    {
      circumference: 360,
      font: {
        size: 100,
      },
      label: "My First Dataset",
      data: [70, 50, 100, 40, 150],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(0, 255, 0)",
        "rgb(238,130,238)",
      ],
      hoverOffset: 4,
    },
  ],
};

//PreventivePage element function
export default function PreventivePage() {
  return (
    <div className="pp flex items-center justify-around landing">
      <div className="landingPageText mx-6">
        <div className="slogan-pp font-bold text-4xl my-2">
          <div className="text-6xl yellow prev-head">Preventions</div>
          The Following Measures are effective for the Respiratory Diseases:
        </div>
        <div>
          {" "}
          {/* Measures */}
          <h2 className="sub ">
            1) <span className="text-red">Don't</span> Smoke
          </h2>
          <img
            className="landingImage prev-image rounded-xl"
            src={require("../images/smoke.jpg")}
            alt=""
          />
          <p className="prev-body">
            Cigarette smoking is the major cause of lung cancer and chronic
            obstructive pulmonary disease (COPD), which includes chronic
            bronchitis and emphysema. Cigarette smoke can narrow the air
            passages and make breathing more difficult. It causes chronic
            inflammation, or swelling in the lung, which can lead to chronic
            bronchitis. Over time cigarette smoke destroys lung tissue and may
            trigger changes that grow into cancer. According to the Surgeon
            General, quitting smoking is the single most important step a smoker
            can take to improve the length and quality of his or her life. As
            soon as you quit, your body begins to repair the damage caused by
            smoking. Of course, it's best to quit early in life, but even
            someone who quits later in life will improve their health.
          </p>
          <h2 className="sub">
            2) <span className="text-red">Avoid</span> Exposure to Indoor
            Pollutants
          </h2>
          <img
            className="prev-image rounded-xl"
            src={require("../images/indoorpollutants.jpg")}
            alt=""
          />
          <p className="prev-body">
            Secondhand smoke, chemicals in the home and workplace, and radon all
            can cause or worsen lung disease. Make your home and car smokefree.
            Test your home for radon. Avoid exercising outdoors on bad air days.
            And talk to your healthcare provider if you are worried that
            something in your home, school or work may be making you sick.
            <br /> The air you breathe in your home or office may be hazardous
            to your health - more dangerous, in fact, than the outdoor air in
            the most polluted of cities. This is especially so during the cold
            months, when windows and doors are kept tightly shut and homes,
            schools and office buildings are made as airtight as possible to
            conserve energy.
            <br /> Many people don't realize that their ''perpetual cold'' or
            other nagging symptoms may be caused by the very air they breathe in
            their own homes, at school or on the job. Some have been plagued for
            years and have visited doctor after doctor in a vain attempt to
            uncover the cause of their problem.
            <br /> Once the real culprit is suspected or identified, many
            sources of indoor pollution can be greatly reduced and perhaps
            prevented entirely, sometimes with little loss of costly heat to the
            great outdoors.
          </p>
          <h2 className="sub">
            3)<span className="text-red">Minimize</span> Exposure to Outdoor Air
            Pollution
          </h2>
          <img
            className="prev-image rounded-xl"
            src={require("../images/pollution.jpg")}
            alt=""
          />
          <p className="prev-body">
            The air quality outside can vary from day to day and sometimes is
            unhealthy to breathe. Knowing how outdoor air pollution affects your
            health and useful strategies to minimize prolonged exposure can help
            keep you and your family well. Climate change and natural disasters
            can also directly impact lung health.
            <br />
            The health effects of air pollution remain a public health concern
            worldwide. Exposure to air pollution has many substantial adverse
            effects on human health. Globally, seven million deaths were
            attributable to the joint effects of household and ambient air
            pollution. Subjects with chronic respiratory diseases such as
            chronic obstructive pulmonary disease (COPD) and asthma are
            especially vulnerable to the detrimental effects of air pollutants.
            Air pollution can induce the acute exacerbation of COPD and onset of
            asthma, increase the respiratory morbidity and mortality. The health
            effects of air pollution depend on the components and sources of
            pollutants, which varied with countries, seasons, and times. <br />{" "}
            Combustion of solid fuels is a major source of air pollutants in
            developing countries. <br /> To reduce the detrimental effects of
            air pollution, people especially those with COPD or asthma should be
            aware of the air quality and take extra measures such as reducing
            the time outdoor and wearing masks when necessary. For reducing the
            air pollutants indoor, people should use clean fuels and improve the
            stoves so as to burn fuel more efficiently and vent emissions to the
            outside. Air cleaners that can improve the air quality efficiently
            are recommended.
          </p>
          <h2 className="sub">
            4) <span className="text-red">Prevent</span> Infection
          </h2>
          <img
            className="prev-image rounded-xl"
            src={require("../images/mask.jpg")}
            alt=""
          />
          <p className="prev-body">
            A cold or other respiratory infection can sometimes become very
            serious. There are several things you can do to protect yourself:
            <ui className="list">
              <li>
                Wash your hands often with soap and water. Alcohol-based
                cleaners are a good substitute if you cannot wash.
              </li>
              <li>Avoids crowds during the cold and flu season.</li>
              <li>
                Good oral hygiene can protect you from the germs in your mouth
                leading to infections. Brush your teeth at least twice daily and
                see your dentist at least every six months.
              </li>
              <li>
                If you get sick, keep it to yourself! Protect the people around
                you, including your loved ones, by keeping your distance. Stay
                home from work or school until you're feeling better.
              </li>
            </ui>
          </p>
          <h2 className="sub">
            5) <span className="text-red">Get</span> Regular Check-ups
          </h2>
          <img
            className="prev-image rounded-xl"
            src={require("../images/doctor.jpg")}
            alt=""
          />
          <p className="prev-body">
            Regular check-ups help prevent diseases, even when you are feeling
            well. This is especially true for lung disease, which sometimes goes
            undetected until it is serious. During a check-up, your healthcare
            provider will listen to your breathing and listen to your concerns.
            <br />
            Regular health check-ups can identify any early signs of health
            issues. Finding problems early means that your chances for effective
            treatment are increased. Many factors, such as your age, health,
            family history and lifestyle choices, impact on how often you need
            check-ups.
            <br />
            In this fast-paced life, where we are always on the go, we hardly
            spare any time for ourselves – to review our health condition, check
            whether or not we are eating properly, taking ample amount of sleep,
            exercising regularly, and so on. <br />
            While we aren’t unaware of the fact that all these petty things are
            what exactly govern our lives and help us stay fit and healthy, we
            pay the least attention to our condition, until we’ve run out of
            time. We fall sick only to discover, we’ve been lethargic and
            ignorant about our health issues we already knew were brewing since
            a long time.
          </p>
          <h2 className="sub">
            6)<span className="text-red">Start</span> Exercising
          </h2>
          <img
            className="prev-image rounded-xl"
            src={require("../images/exercise.jpg")}
            alt=""
          />
          <p className="prev-body">
            Whether you are young or old, slender or large, able-bodied or
            living with a chronic illness or disability, being physically active
            can help keep your lungs healthy.
            <br />
            When you are physically active, your heart and lungs work harder to
            supply the additional oxygen your muscles demand. Just like regular
            exercise makes your muscles stronger, it also makes your lungs and
            heart stronger. As your physical fitness improves, your body becomes
            more efficient at getting oxygen into the bloodstream and
            transporting it to the working muscles. That's one of the reasons
            that you are less likely to become short of breath during exercise
            over time.
            <br />
            Some types of exercise can also strengthen the muscles of the neck
            and chest, including the diaphragm and muscles between the ribs that
            work together to power inhaling and exhaling.
          </p>
        </div>{" "}
        {/* PieChart */}
        <div className="pie">
          <PieChart chartData={data} />
        </div>
      </div>
    </div>
  );
}
