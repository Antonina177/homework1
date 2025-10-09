const sumArray = (arr: (number | string | unknown)[]): number => {
    return arr
      .filter((item): item is number => typeof item === 'number')
      .reduce((acc, num) => acc + num, 0);
  };
  
  const numbers: number[] = [10, 20, 30, 40];
  const strings: string[] = ['10', '20', '30'];
  
  console.log(sumArray(numbers)); // 100
  console.log(sumArray(strings)); // 0
  
  
