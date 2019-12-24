/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2.5 jam
  cars ke - 1 = butuh waktu 2.25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.63 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner (cars, totalKM) {
  let timeCars = [], distLeft, timeLeft;
  for (i = 0; i < cars.length; i++) { // looping for calculating arrival time of each car
    distLeft = totalKM-cars[i][2];
    timeLeft = distLeft/cars[i][1];
    timeCars.push([cars[i][0],timeLeft]); // each car number and its arrival time pushed into new array
  }
  // return timeCars;
  
  let tmp = [];
  for (j = 0; j < timeCars.length-1; j++) { // ascending bubble-sort to sort cars by their arrival time
    for (k = 0; k < timeCars.length-1-j; k++) {
      if (timeCars[k][1] > timeCars[k+1][1]) {
        tmp = timeCars[k];
        timeCars[k] = timeCars[k+1];
        timeCars[k+1] = tmp;
      }
    }
  }
  // return timeCars;

  let arrival = [];
  for (m = 0; m < timeCars.length; m++) { // looping for putting car numbers in another array in order of time of arrival
    arrival.push(timeCars[m][0]);
  }
  return arrival;
};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/