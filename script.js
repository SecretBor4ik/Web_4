function Task1() 
{
    let faculty = 
    {
    Name: "ІАТЕ",
    Phone: "+380872137126"
    };

    alert("Назва факультету: " + faculty.Name + "\nІм'я: " + faculty.Phone);
}

function Task2() {
    let Group = 
    {
        Specialty: "",
        Number: "",
        Count: 0,
      
        addInfo: function (Specialty, Number, Count) {
            this.Specialty = Specialty;
            this.Number = Number;
            this.Count = Count;
        },
      
        editInfo: function (Specialty, Number, Count) {
            this.Specialty = Specialty;
            this.Number = Number;
            this.Count = Count;
        },
      
        deleteInfo: function () {
            this.Specialty = "";
            this.Number = "";
            this.Count = 0;
        }
    };
        
          Group.addInfo("Комп'ютерні науки", "ТР-25", 20);
          alert("Додавання даних:\nСпеціальність: " + Group.Specialty + "\nШифр: " + Group.Number
            + "\nКількість студентів: " + Group.Count);
        
          Group.editInfo("Філософія", "ІП-228", 7);
          alert("Змінення даних:\nСпеціальність: " + Group.Specialty + "\nШифр: " + Group.Number
            + "\nКількість студентів: " + Group.Count);

          Group.deleteInfo();
          alert("Видаленняи даих:\nСпеціальність: " + Group.Specialty + "\nШифр: " + Group.Number
            + "\nКількість студентів: " + Group.Count);
        
          return Group;
}

function Task3() {
    let faculty = 
    {
    Name: "ІАТЕ",
    Phone: "+380872137126"
    };

    let Group = 
    {
        Specialty: "Комп'ютерні науки",
        Number: "ТР-25",
        Count: 19,
      
        addInfo: function (Specialty, Number, Count) {
            this.Specialty = Specialty;
            this.Number = Number;
            this.Count = Count;
        },
      
        editInfo: function (Specialty, Number, Count) {
            this.Specialty = Specialty;
            this.Number = Number;
            this.Count = Count;
        },
      
        deleteInfo: function () {
            this.Specialty = "";
            this.Number = "";
            this.Count = 0;
        }
    };

    for (let key in faculty) {
        if (faculty.hasOwnProperty(key)) {
            Group[key] = faculty[key];
        }
    }

    alert("Оновлений об'єкт 'Група' після копіювання властивостей та методів з 'Факультет':\nСпеціальність: " + Group.Specialty + "\nШифр: " + Group.Number + "\nКількість студентів: " + Group.Count + "\nНазва факультету: " + Group.Name + "\nТелефон: " + Group.Phone);
}

function Task4() {
    let Group = Task2();
    Group.showData = function () {
      alert("Показати дані:\nСпеціальність: " + this.Specialty + "\nШифр: " + this.Number + "\nКількість студентів: " + this.Count);
    };
  
    Group.addInfo("Інформатика", "IT-01", 25);
    Group.showData();
}

function Task5() {
let Group = {
    Specialty: "",
    Number: "",
    Count: 0,
  
    showData: function () {
        return "Спеціальність: " + this.Specialty + "\nШифр: " + this.Number + "\nКількість студентів: " + this.Count;
    }
};

let Session = Object.create(Group);
Session.Excluded = 0;

Session.calculateExcludedPercentage = function () {
    return "Відсоток не відрахованих: " + ((this.Count - this.Excluded) / this.Count * 100) + "%";
};

Group.showData = function () {
    return "Спеціальність: " + this.Specialty + "\nШифр: " + this.Number + "\nКількість студентів: " + this.Count + "\nСтудентів відраховано: " + this.Excluded;
};

let sessionObject = Object.create(Session);
sessionObject.Specialty = "Інформатика";
sessionObject.Number = "IT-01";
sessionObject.Count = 25;
sessionObject.Excluded = 5;

alert(sessionObject.showData());
alert(sessionObject.calculateExcludedPercentage());
}

function Task6() {

class GroupClass {
    constructor() {
        this._Specialty = "";
        this._Number = "";
        this._Count = 0;
    }

    get Specialty() {
        return this._Specialty;
    }

    set Specialty(value) {
        this._Specialty = value;
    }
    get Number() {
        return this._number;
    }

    set Number(value) {
        this._Number = value;
    }

    get Count() {
        return this._Count;
    }

    set Count(value) {
        this._Count = value;
    }

    showData() {
        return `Спеціальність: ${this._Specialty}\nШифр: ${this._Number}\nКількість студентів: ${this._Count}`;
    }
}

class SessionClass extends GroupClass {
    constructor() {
        super(); 
        this._Excluded = 0;
    }

    get Excluded() {
        return this._Excluded;
    }

    set Excluded(value) {
        this._Excluded = value;
    }

    showData() {
        return `${super.showData()}\nСтудентів відраховано: ${this._Excluded}`;
    }

    excludedPercentage() {
        return `Студентів не відраховано: ${((this.Count - this.Excluded) / this.Count * 100)}%`;
    }
}

let sessionObject = new SessionClass();
sessionObject.Specialty = "Інформатика";
sessionObject.Number = "IT-01";
sessionObject.Count = 25;
sessionObject.Excluded = 5;

alert(sessionObject.showData());
alert(sessionObject.excludedPercentage());

}

