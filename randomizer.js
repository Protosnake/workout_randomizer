const TIMES = 3; // количество упражнений на каждую группу

const random = (int) => Math.floor(Math.random() * int);


const pick = (a) => {
    return a.splice(random(a.length), 1)[0];
}

const createWeek = () => {
    var mondayEx = {
        chest: ['Bench press', 'Bench Dumbbell Press', 'Inclined dumbbell flies', 'Dips', 'Pushups', 'Incline Barbell Bench Press', 'Decline Barbell Bench Press'],
        biceps: ['Barbell Curls', 'Bar Cable Curls', 'EZ Bar Preacher Curls', 'Incline Dumbbell Curls', 'One arm Dumbbell Preacher Curls', 'Seated Dumbbell Curls', 'Standing Biceps Cable Curl']
    }
    var wednesdayEx = {
        legs: ['Back squat', 'Front squat', 'Romanian deadlift', 'Good mornings', 'Walking lunges', 'Reverse lunge'],
        triceps: ['Close-Grip Bench Press', 'Decline Triceps Extension', 'Band Pushdown', 'Close-Grip Floor Press', 'Lying Triceps Extension', 'Pullover', ]
    };
    var fridayEx = {
        back: ['Resistance band pull apart', 'Barbell deadlift', 'Hyperextension', 'Good morning', 'Wide dumbbell row', 'Lat pulldown', ],
        shoulders: ['Dumbbell front raise', 'Dumbbell lateral raise', 'Reverse fly', 'Seated military press', 'Standing dumbbell shoulder press', 'One-arm dumbbell push press']
    }

    var week = {
        monday: [],
        wednesday: [],
        friday: []
    };
    Object.keys(week).forEach(day => {
        switch (day) {
            case 'monday':
                var def = 6;
                var times = random(3) + 2;
                [...Array(times).keys()].forEach(() => week[day].push(pick(mondayEx.chest)));
                [...Array(def - times).keys()].forEach(() => week[day].push(pick(mondayEx.biceps)));
                break;
            case 'wednesday':
                var def = 6;
                var times = random(3) + 2;
                [...Array(times).keys()].forEach(() => week[day].push(pick(wednesdayEx.legs)));
                [...Array(def - times).keys()].forEach(() => week[day].push(pick(wednesdayEx.triceps)));
                break;
            case 'friday':
                var def = 6;
                var times = random(3) + 2;
                [...Array(times).keys()].forEach(() => week[day].push(pick(fridayEx.back)));
                [...Array(def - times).keys()].forEach(() => week[day].push(pick(fridayEx.shoulders)));
                break;
            default:
                throw new Error('ты лох');
        }
        week[day].push()
    })
    return (week);
};

const createHeader = () => {
    document.querySelector('table').innerHTML = '<thead><tr class="table-dark"><th class="col-2">Day</th><th class="col-6">Exercises</th><th>Muscle</th><th>Reps</th></tr>';
}


const addTable = () => {
    let week = createWeek();
    console.log(week)
    if (document.querySelector('tbody')) {
        document.querySelector('tbody').remove();
    }
    createHeader();
    let tbody = document.createElement('tbody');
    document.querySelector('table').appendChild(tbody);

    Object.keys(week).map(day => {
        let parentRow = document.createElement('tr');

        week[day].forEach((exercise, i) => {
            let row = document.createElement('tr');
            let dayData = document.createElement('td');

            if (i == 0) {
                dayData.innerHTML = _.capitalize(day);
                row.setAttribute('class', 'table-secondary')
            }
            row.appendChild(dayData);


            let exerciseData = document.createElement('td');
            exerciseData.innerHTML = _.capitalize(exercise);
            row.appendChild(exerciseData);

            let muscleData = document.createElement('td');
            muscleData.innerHTML = 'Chest';
            row.appendChild(muscleData);

            let repData = document.createElement('td');
            repData.innerHTML = '3x15';
            row.appendChild(repData);



            tbody.appendChild(row)
        })

    })
}