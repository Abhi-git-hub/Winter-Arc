function notifier(){
    return {
        sendNotification(message){
            console.log(`Notification: ${message}`)

        }
    }
}

function createStudent(name){
    return {
        name, ...notifier(), 
        study(){
            console.log(`${this.name} is studying...`)
        }
    }
}
function createTeacher(name){
    return {
        name, ...notifier(), 
        teach(){
            console.log(`${this.name} is teaching...`)
        }
    }
}

const teacher = createTeacher("Mr. Rahul")
const student = createStudent("Abhi Yadav")

student.study()
student.sendNotification("You have to come to school daily.")
teacher.teach()
teacher.sendNotification("Tomorrow you will be suspended. Bye")
