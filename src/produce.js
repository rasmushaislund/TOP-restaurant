// START //

export function createMenu() {
  const menu = document.createElement('div');
  const sectionOne = document.createElement('div');
  const sectionOneHeader = document.createElement('h4');
  const sectionOneItemA = document.createElement('div');
  const sectionOneProdA = document.createElement('p');
  const sectionOnePriceA = document.createElement('p');
  const sectionOneItemB = document.createElement('div');
  const sectionOneProdB = document.createElement('p');
  const sectionOnePriceB = document.createElement('p');
  const sectionOneItemC = document.createElement('div');
  const sectionOneProdC = document.createElement('p');
  const sectionOnePriceC = document.createElement('p');
  const sectionTwo = document.createElement('div');
  const sectionTwoHeader = document.createElement('h4');
  const sectionTwoItemA = document.createElement('div');
  const sectionTwoProdA = document.createElement('p');
  const sectionTwoPriceA = document.createElement('p');
  const sectionTwoItemB = document.createElement('div');
  const sectionTwoProdB = document.createElement('p');
  const sectionTwoPriceB = document.createElement('p');
  const sectionThree = document.createElement('div');
  const sectionThreeHeader = document.createElement('h4');
  const sectionThreeItemA = document.createElement('div');
  const sectionThreeProdA = document.createElement('p');
  const sectionThreePriceA = document.createElement('p');
  const sectionThreeItemB = document.createElement('div');
  const sectionThreeProdB = document.createElement('p');
  const sectionThreePriceB = document.createElement('p');

  menu.classList.add('menu-container');
  sectionOne.classList.add('menu-section');
  sectionTwo.classList.add('menu-section');
  sectionThree.classList.add('menu-section');

  sectionOneHeader.textContent = '✼ Rye ✼';
  sectionOneProdA.textContent = 'Rye bread A';
  sectionOnePriceA.textContent = 'DKK 29';
  sectionOneProdB.textContent = 'Rye bread B';
  sectionOnePriceB.textContent = 'DKK 35';
  sectionOneProdC.textContent = 'Rye bread C';
  sectionOnePriceC.textContent = 'DKK 39';
  sectionTwoHeader.textContent = '✼ Wheat ✼';
  sectionTwoProdA.textContent = 'Wheat bread A';
  sectionTwoPriceA.textContent = 'DKK 19';
  sectionTwoProdB.textContent = 'Wheat bread B';
  sectionTwoPriceB.textContent = 'DKK 29';
  sectionThreeHeader.textContent = '✼ Sweet ✼';
  sectionThreeProdA.textContent = 'Sweet bread A';
  sectionThreePriceA.textContent = 'DKK 10';
  sectionThreeProdB.textContent = 'Sweet bread B';
  sectionThreePriceB.textContent = 'DKK 15';

  sectionOne.append(
    sectionOneHeader,
    sectionOneItemA,
    sectionOneItemB,
    sectionOneItemC
  );
  sectionTwo.append(sectionTwoHeader, sectionTwoItemA, sectionTwoItemB);
  sectionThree.append(sectionThreeHeader, sectionThreeItemA, sectionThreeItemB);
  sectionOneItemA.appendChild(sectionOneProdA);
  sectionOneItemA.appendChild(sectionOnePriceA);
  sectionOneItemB.appendChild(sectionOneProdB);
  sectionOneItemB.appendChild(sectionOnePriceB);
  sectionOneItemC.appendChild(sectionOneProdC);
  sectionOneItemC.appendChild(sectionOnePriceC);
  sectionTwoItemA.appendChild(sectionTwoProdA);
  sectionTwoItemA.appendChild(sectionTwoPriceA);
  sectionTwoItemB.appendChild(sectionTwoProdB);
  sectionTwoItemB.appendChild(sectionTwoPriceB);
  sectionThreeItemA.appendChild(sectionThreeProdA);
  sectionThreeItemA.appendChild(sectionThreePriceA);
  sectionThreeItemB.appendChild(sectionThreeProdB);
  sectionThreeItemB.appendChild(sectionThreePriceB);
  menu.append(sectionOne, sectionTwo, sectionThree);

  return menu;
}

// END //
