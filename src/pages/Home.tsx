import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

import { Container, Title, Greetings, Text, Input } from './styles';

interface SkillsProps {
  id: string;
  name: string;
}

export function Home() {
  const [skill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillsProps[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: skill,
    }
    setMySkills([...mySkills, data])
    setNewSkill('')
  }

  function handleRemoveSkill(id: string) {
    setMySkills(mySkills => mySkills.filter( skill => skill.id !== id ))
  }

  useEffect(() => {
    async function loadData() {
      const getData = await AsyncStorage.getItem('@myskills:skills');
      return getData != null ? setMySkills(JSON.parse(getData)) : null;
    }
    loadData();
  }, [])
  
  useEffect(() => {
    const currentHour = new Date().getHours();
    if(currentHour < 12) {
      setGreeting("Bom Dia")
    } else if(currentHour < 18) {
      setGreeting("Boa Tarde")
    } else {
      setGreeting("Boa Noite")
    }
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@myskills:skills', JSON.stringify(mySkills))
    }
    saveData();
  }, [mySkills])

  return (
    <>
       <Container>
         <Title>Bem Vindo, Mateus</Title>
         <Text>Sistemas de Informação</Text>

         <Greetings>
           {greeting}
         </Greetings>
 
         <Input
           placeholder="New Skill"
           placeholderTextColor='#555'
           value={skill}
           onChangeText={value => setNewSkill(value)}
           onSubmitEditing={handleAddNewSkill}
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
 
         <Text style={{marginTop: 15, marginBottom: 10}}>
           MySkills
         </Text>
         <FlatList showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard 
              item={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
       </Container>
   </>
   );
}

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingHorizontal: 30,
//     paddingVertical: 70,
//     backgroundColor: '#121815'
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   greetings: {
//     color: '#fff',
//   },
//   text: {
//     fontSize: 20,
//     color: '#fff'
//   },
//   input: {
//     marginTop: 20, 
//     padding: 10,
//     // width: 150, 
//     // height: 40,
//     fontSize: 15,
//     borderRadius: 10,
//     backgroundColor: '#1f1e25',
//     color: '#fff',
//   },
// })