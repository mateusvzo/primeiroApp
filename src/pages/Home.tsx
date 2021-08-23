import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillsProps {
  id: string;
  name: string;
}

export function Home() {
  const [skill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillsProps[]>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: skill,
    }
    setMySkills([...mySkills, data])
    setNewSkill('')
  }

  // const onPress = () => {
  //   setMySkills([...mySkills, skill]);
  // }          Meu jeito

  // return (
  //  <>
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Bem Vindo, Mateus</Text>
  //       <Text style={styles.text}>Sistemas de Informação</Text>

  //       <TextInput 
  //         style={styles.input}
  //         placeholder="New Skill"
  //         placeholderTextColor='#555'
  //         value={skill}
  //         onChangeText={value => setNewSkill(value)}
  //       />

  //       <TouchableOpacity
  //         style={styles.button}
  //         activeOpacity={0.5}
  //         onPress = {handleAddNewSkill}
  //       >
  //         <Text style={styles.buttonText}>Add</Text>
  //       </TouchableOpacity>

  //       <Text
  //       style={[styles.title, {marginVertical: 20}]}
  //       >
  //         MySkills
  //       </Text>
  //       <ScrollView showsVerticalScrollIndicator={false}>
  //         {mySkills.map(e => (
  //           <TouchableOpacity key={e.id} style={styles.buttonSkill}>
  //             <Text style= {styles.textSkill}>{e.name}</Text>
  //           </TouchableOpacity>
  //         ))}
  //       </ScrollView>
  //     </View>
  // </>
  // );

  return (
    <>
       <View style={styles.container}>
         <Text style={styles.title}>Bem Vindo, Mateus</Text>
         <Text style={styles.text}>Sistemas de Informação</Text>
 
         <TextInput 
           style={styles.input}
           placeholder="New Skill"
           placeholderTextColor='#555'
           value={skill}
           onChangeText={value => setNewSkill(value)}
         />
 
         {/* <TouchableOpacity
           style={styles.button}
           activeOpacity={0.5}
           onPress = {handleAddNewSkill}
         >
           <Text style={styles.buttonText}>Add</Text>
         </TouchableOpacity> */}
         <Button 
          title="Add"
          onPress={handleAddNewSkill}
         />
 
         <Text
         style={[styles.title, {marginVertical: 20}]}
         >
           MySkills
         </Text>
         <FlatList showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard item={item.name}/>
          )}
        />
       </View>
   </>
   );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121815'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    marginTop: 20, 
    padding: 10,
    // width: 150, 
    // height: 40,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: '#1f1e25',
    color: '#fff',
  },
})