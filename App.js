import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('') 
  const [courseGoals, setCourseGoals ] = useState([]) 
  


  function goalInputHandler(enteredText) {// entered text is auto created by onChangeText
    // console.log(enteredText) 
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    console.log(enteredGoalText) 
    // setCourseGoals([...courseGoals, enteredGoalText])// bad habby 
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText])// update base on old goals
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Goal..." style={styles.textInput} onChangeText={goalInputHandler} /> 
        {/* BUTTON DONT HAVE STYLE PROP */}
        <Button title="Add Goal" onPress={addGoalHandler} /> 
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
         <Text key={index}>{goal}</Text> 
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50, 
    paddingHorizontal: 16, 
  }, 
  inputContainer:{ 
    flex: 1,
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 24, 
    borderBottomWidth: 1,  
    borderBottomColor: "#cccccc"
  }, 
  textInput: {
    borderWidth: 1, 
    borderColor: "#cccccc", 
    width: "70%",  
    marginRight: 8, 
    padding: 8
  }, 
  goalsContainer: {
    flex: 5,
  }
});
