const sumArrayArrow = (arr: (number | string | unknown)[]): number => {
    return arr
      .filter((item): item is number => typeof item === 'number')
      .reduce((acc, num) => acc + num, 0);
  };
  
  const numbers2: number[] = [10, 20, 30, 40];
  const strings2: string[] = ['10', '20', '30'];
  
  console.log(sumArray(numbers));
  console.log('-------');
  console.log(sumArray(strings)); 
  
  
