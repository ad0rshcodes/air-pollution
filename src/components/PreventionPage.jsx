
import PieChart from "./PieChart";

const data = {
    labels: [
      'No Smoking',
      'Avoiding Pollutant Exposure',
      'Prevent Infection',
      'Regular Check-Ups',
      'Exercise'
    ],
    datasets: [{
      circumference: 360,
        font:{
            size:100
        },
      label: 'My First Dataset',
      data: [70, 50, 100, 40, 150],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 255, 0)',
        'rgb(238,130,238)'
      ],
      hoverOffset: 4
    }]
  };


export default function PreventivePage(){
  return (
    <div className="flex items-center">
      <div className="landingPageText mx-6">
        <div className="slogan font-bold text-4xl my-2">
          <div className="text-6xl yellow prev-head">"Preventions"</div>
          The Following Measures are effective for the Respiratory Diseases:
        </div>
        <div >
            <h2 className="sub">
              1) Don't Smoke
            </h2>
            <b className="prev-body">
            Cigarette smoking is the major cause of lung cancer and chronic obstructive pulmonary disease (COPD), which includes chronic bronchitis and emphysema. Cigarette smoke can narrow the air passages and make breathing more difficult. It causes chronic inflammation, or swelling in the lung, which can lead to chronic bronchitis. Over time cigarette smoke destroys lung tissue and may trigger changes that grow into cancer
            </b>
            <h2 className="sub">
              2) Avoid Exposure to Indoor Pollutants
            </h2>
            <b className="prev-body">
            Secondhand smoke, chemicals in the home and workplace, and radon all can cause or worsen lung disease. Make your home and car smokefree. Test your home for radon. Avoid exercising outdoors on bad air days. And talk to your healthcare provider if you are worried that something in your home, school or work may be making you sick.
            </b>
            <h2 className="sub">
            3) Minimize Exposure to Outdoor Air Pollution    
            </h2>
            <b className="prev-body">
            The air quality outside can vary from day to day and sometimes is unhealthy to breathe. Knowing how outdoor air pollution affects your health and useful strategies to minimize prolonged exposure can help keep you and your family well. Climate change and natural disasters can also directly impact lung health.
            </b>
            <h2 className="sub">
            4) Prevent Infection
            </h2>
            <b className="prev-body">
            A cold or other respiratory infection can sometimes become very serious. There are several things you can do to protect yourself:
             <ui className="list">
                 <li>
                 Wash your hands often with soap and water. Alcohol-based cleaners are a good substitute if you cannot wash.
                 </li>
                 <li>
                 Avoids crowds during the cold and flu season.
                 </li>
                 <li>
                 Good oral hygiene can protect you from the germs in your mouth leading to infections. Brush your teeth at least twice daily and see your dentist at least every six months.
                 </li>
                 <li>
                 If you get sick, keep it to yourself! Protect the people around you, including your loved ones, by keeping your distance. Stay home from work or school until you're feeling better.
                 </li>

             </ui>
            </b>
            <h2 className="sub">
            5) Get Regular Check-ups
            </h2>
            <b className="prev-body">
            Regular check-ups help prevent diseases, even when you are feeling well. This is especially true for lung disease, which sometimes goes undetected until it is serious. During a check-up, your healthcare provider will listen to your breathing and listen to your concerns.
            </b>
            <h2 className="sub">
                6) Exercise
            </h2>
            <b className="prev-body">
            Whether you are young or old, slender or large, able-bodied or living with a chronic illness or disability, being physically active can help keep your lungs healthy.
            </b>

        </div>
        <div className="pie">
            <PieChart chartData={data}/>
        </div>
      </div>

      
    </div>
  );
}

