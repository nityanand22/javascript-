const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
  }
  
  // const {courseInstructor} = course
  // console.log(courseInstructor)
  const {courseInstructor : instructor} = course
  console.log(instructor)