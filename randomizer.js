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
    console.log(week);
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

const addTable = () => {
    let week = createWeek();
    console.log(week)
    if (document.querySelector('tbody')) {
        document.querySelector('tbody').remove();
    }
    document.querySelector('table').innerHTML = '<tr class="table-primary"><th class="col-3">Day</th><th>Exercises</th></tr>';

    Object.keys(week).map(day => {
        let parentRow = document.createElement('tr');

        week[day].forEach((exercise, i) => {
            let childRow = document.createElement('tr');
            let dayCell = document.createElement('th');

            if (i == 0) {
                dayCell.innerHTML = _.capitalize(day);
                childRow.setAttribute('class', 'table-secondary')
            }
            childRow.appendChild(dayCell);


            let exerciseCell = document.createElement('td');
            exerciseCell.innerHTML = _.capitalize(exercise);
            childRow.appendChild(exerciseCell);
            // parentRow.appendChild(childRow);

            document.querySelector('tbody').appendChild(childRow)
        })

    })
}