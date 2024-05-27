import React, { useState } from "react";

import ItemAddForm from "./ItemAdd";

const Item = () => {
  // Массив объектов с загадками
  const riddles = [
      {
          id: 1,
          description: 'Загадка 1: Сидит девица в темнице,а коса ее наружу.',
          option1: 'Морковь',
          option2: 'Яблоня',
          option3: 'Ослица',
          option4: 'Корова',
          correct: 1
      },
      {
          id: 2,
          description: 'Загадка 2: И земой и летом, и вверх и вниз идёт с одинаковой скоростью',
          option1: 'Атомы',
          option2: 'Ветер',
          option3: 'Время',
          option4: 'Телега',
          correct: 3
      },
      {
          id: 3,
          description: 'Загадка 3: Про что книга "Оно"?',
          option1: 'Про неизвестного мальчика с уродливым лицом. ',
          option2: 'Про девочку Аню,которая встретила "Оно"',
          option3: 'Про НЛО',
          option4: 'Про клуб "Неудачников",которые боролись с внеземным злом',
          correct: 4
      },
      {
        id: 4,
        description: 'Загадка 4: У мамы Гали есть три дочери. Одну из них зовут Света, другую – Лена. Как зовут третью?',
        option1: 'Галя',
        option2: 'Аня',
        option3: 'Свена',
        option4: 'Моника',
        correct: 1
    },
    {
        id: 5,
        description: 'Загадка 5: Летели два вердблюда,один направо,другой в Азейбарджан,ёжик стрельнул колючкой в кошку,кошка поцарапала кота,сколько весит грамм асфальта, на котором сидит ёжик?',
        option1: 'Нерешаемо',
        option2: 'Один грамм',
        option3: 'Тонну',
        option4: 'Киллограм',
        correct: 2
    },
    {
        id: 6,
        description: 'Загадка 6: каким танком оперировал экипаж Колобанова?',
        option1: 'Т-34',
        option2: 'Т-14 Армата',
        option3: 'КВ-1',
        option4: 'ИСУ-152',
        correct: 3
    }

    
  ];
  const [itemArray, setItemArray] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);


  return (
      <div>
        <h1>ИТ/1-23 Потаковский Михаил Владимирович</h1>
          <h2>Загадки</h2>
          {riddles.map(riddle => (
              <div key={riddle.id}>
                  <p>{riddle.description}</p>
                  <ul>
                      <li>{riddle.option1}</li>
                      <li>{riddle.option2}</li>
                      <li>{riddle.option3}</li>
                      <li>{riddle.option4}</li>
                  </ul>
              </div>
          ))}
      </div>
  );
}
const handleFormSubmit = (formData) => {
    setItemArray([...itemArray, formData]);
  };

  const handleOptionChange = (itemId, option) => {
    setUserAnswers({ ...userAnswers, [itemId]: option });
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  const pageContent = itemArray.map((item, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = showAnswers && userAnswer === item.correct;

    return (
      <div key={index}>
        <h3>{item.description}</h3>

        <div className="options">
          <div>
            <input
              id={`option-1-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option1}
              onChange={() => handleOptionChange(index, item.option1)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-1-${index}`}>{item.option1}</label>
          </div>

          <div>
            <input
              id={`option-2-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option2}
              onChange={() => handleOptionChange(index, item.option2)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-2-${index}`}>{item.option2}</label>
          </div>

          <div>
            <input
              id={`option-3-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option3}
              onChange={() => handleOptionChange(index, item.option3)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-3-${index}`}>{item.option3}</label>
          </div>

          <div>
            <input
              id={`option-4-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option4}
              onChange={() => handleOptionChange(index, item.option4)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-4-${index}`}>{item.option4}</label>
          </div>
        </div>
        {showAnswers && (
          <p className={isCorrect ? "correct" : "incorrect"}>
            {isCorrect
              ? "Правильно!"
              : `Неправильно. Думать надо головой, ответ: ${item.correct}`}
          </p>
        )}
      </div>
    );
  });

  return (
    <>
      <ItemAddForm onFormSubmit={handleFormSubmit} />

      <button className="button" onClick={handleShowAnswers} disabled={showAnswers}>
        Узнать ответы
      </button>
      {pageContent}
    </>
  );


export default Item;