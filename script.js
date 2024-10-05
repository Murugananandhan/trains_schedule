
    
    class TrainSchedule {
      constructor() {
        this.trains = [];
      }

      
      addTrain(trainNumber, arrivalTime, departureTime) {
        const train = {
          trainNumber: trainNumber,
          arrivalTime: arrivalTime,
          departureTime: departureTime
        };
        this.trains.push(train);
        this.displaySchedule();
      }

      
      displaySchedule() {
        const scheduleDisplay = document.getElementById('scheduleDisplay');
        scheduleDisplay.innerHTML = ''; 

        this.trains.forEach((train) => {
          const trainElement = document.createElement('div');
          trainElement.classList.add('train');
          trainElement.innerHTML = `
            <strong>Train Number:</strong> ${train.trainNumber}<br>
            <strong>Arrival:</strong> ${train.arrivalTime}<br>
            <strong>Departure:</strong> ${train.departureTime}
          `;
          scheduleDisplay.appendChild(trainElement);
        });
      }
    }

    
    const schedule = new TrainSchedule();

    
    function addTrain() {
      const trainNumber = document.getElementById('trainNumber').value;
      const arrivalTime = document.getElementById('arrivalTime').value;
      const departureTime = document.getElementById('departureTime').value;

      
      if (trainNumber && arrivalTime && departureTime) {
        schedule.addTrain(trainNumber, arrivalTime, departureTime)
        document.getElementById('trainNumber').value = '';
        document.getElementById('arrivalTime').value = '';
        document.getElementById('departureTime').value = '';
      } else {
        alert("Please fill in all fields");
      }
    }
  