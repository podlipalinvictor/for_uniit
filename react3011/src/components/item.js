const Item = () => {
    // Массив объектов 
    const riddles = [
        {
            id: 1,
            description: 'Загадка 1: Страус может назвать себя птицей?',
            option1: 'Да',
            option2: 'Нет',
            option3: 'не знаю',
            option4: 'аы',
            correct: 2
        },
        {
            id: 2,
            description: 'Загадка 2: Остался ли с1 живой?',
            option1: 'Да',
            option2: 'Нет',
            option3: 'Затрудняюсь ответить',
            option4: 'юзаю',
            correct: 2
        },
        {
            id: 3,
            description: 'Загадка 3: каков должен быть говночист',
            option1: 'закален',
            option2: 'плечист',
            option3: 'бубу',
            option4: 'чист',
            correct: 2
        },
        {
          id: 4,
          description: 'Загадка 4: какого цвета трава? ',
          option1: 'Зеленая',
          option2: 'Бирюзовая',
          option3: 'Дарк блю',
          option4: 'Чедр',
          correct: 1
      },
      {
          id: 5,
          description: 'Загадка 5: Сколько денег в новом кошельке?',
          option1: '1',
          option2: '5',
          option3: '6',
          option4: '0',
          correct: 4
      },
      {
          id: 6,
          description: 'Загадка 6: а бе ме?',
          option1: 'камень',
          option2: ' кимча',
          option3: 'бубу',
          option4: 'ацл',
          correct: 4
      },
      {
          id: 7,
          description: 'Загадка 7: Сколько будет 2+3*2?',
          option1: '8',
          option2: '42',
          option3: '24',
          option4: '6',
          correct: 1
      },
      {
          id: 8,
          description: 'Загадка 8: чего не у человека?',
          option1: 'крыльев',
          option2: 'Мозга',
          option3: 'ног',
          option4: 'пяток',
          correct: 1
      },
    ];
  
    return (
        <div>
        {riddles.map((riddle) =>(
          <div>
          <h3>Загадка №{riddle.id}. {riddle.description}</h3>
         
          <label htmlFor='answers'>Выберите правильный ответ </label>
            <select id='answers'>
              <option>...</option>
              <option>{riddle.option1}</option>
              <option>{riddle.option2}</option>
              <option>{riddle.option3}</option>
              <option>{riddle.option4}</option>
  
  
            </select>
              
            <p>Правильный ответ: {riddle.correct}</p>
  
          </div>
          
        ))}
        
        </div>  
    );
  };
  
  
  