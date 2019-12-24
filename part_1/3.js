/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 3/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  
  let plates = ['A','B','C','D'], count; // declare plate code classification array and a counter variable
  for (i = 0; i < plates.length; i++) { // loop to count occurences of each plate code
    count = 0;
    for (j = 0; j < cars.length; j++) {
      if (cars[j] === plates[i]) {
        count++;
      }
    }
    plates[i] = [plates[i],100*count/cars.length]; // calculate occurence percentages and add to plate code classification array
  }
  // return plates;

  let tmp;
  for (i = 0; i < plates.length-1; i++) { // descending bubble-sort to sort plate codes by their occurence percentages
    for (j = 0; j < plates.length-1-i; j++) {
      if (plates[j][1] < plates[j+1][1]) {
        tmp = plates[j];
        plates[j] = plates[j+1];
        plates[j+1] = tmp;
      }
    }
  }
  return plates;
};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/