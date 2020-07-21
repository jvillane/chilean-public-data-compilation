import {Dieta} from "./parlamento.model";
import {writeFile} from "fs";

export const dietaParlamentaria: Dieta = {
  "2009-03": 6762936,
  "2009-04": 6762936,
  "2009-05": 6762936,
  "2009-06": 6762936,
  "2009-07": 6762936,
  "2009-08": 6762936,
  "2009-09": 6762936,
  "2009-10": 6762936,
  "2009-11": 6762936,
  "2009-12": 7067268,

  "2010-01": 7134102,
  "2010-02": 7134102,
  "2010-03": 7134102,
  "2010-04": 7134102,
  "2010-05": 7134102,
  "2010-06": 7134102,
  "2010-07": 7134102,
  "2010-08": 7134102,
  "2010-09": 7134102,
  "2010-10": 7134102,
  "2010-11": 7134102,
  "2010-12": 7422734,

  "2011-01": 7433734,
  "2011-02": 7433734,
  "2011-03": 7433734,
  "2011-04": 7433734,
  "2011-05": 7433734,
  "2011-06": 7433734,
  "2011-07": 7433734,
  "2011-08": 7433734,
  "2011-09": 7433734,
  "2011-10": 7433734,
  "2011-11": 7433734,
  "2011-12": 7805421,

  "2012-01": 7805421,
  "2012-02": 7805421,
  "2012-03": 7805421,
  "2012-04": 7805421,
  "2012-05": 7805421,
  "2012-06": 7805421,
  "2012-07": 7805421,
  "2012-08": 7805421,
  "2012-09": 7805421,
  "2012-10": 7805421,
  "2012-11": 7805421,
  "2012-12": 8195692,

  "2013-01": 8195692,
  "2013-02": 8195692,
  "2013-03": 8195692,
  "2013-04": 8195692,
  "2013-05": 8195692,
  "2013-06": 8195692,
  "2013-07": 8195692,
  "2013-08": 8195692,
  "2013-09": 8195692,
  "2013-10": 8195692,
  "2013-11": 8195692,
  "2013-12": 8605477,

  "2014-01": 8605477,
  "2014-02": 8605477,
  "2014-03": 8605477,
  "2014-04": 8605477,
  "2014-05": 8605477,
  "2014-06": 8605477,
  "2014-07": 8605477,
  "2014-08": 8605477,
  "2014-09": 8605477,
  "2014-10": 8605477,
  "2014-11": 8605477,
  "2014-12": 9121806,

  "2015-01": 9121806,
  "2015-02": 9121806,
  "2015-03": 9121806,
  "2015-04": 9121806,
  "2015-05": 9121806,
  "2015-06": 9121806,
  "2015-07": 9121806,
  "2015-08": 9121806,
  "2015-09": 9121806,
  "2015-10": 9121806,
  "2015-11": 9121806,
  "2015-12": 9121806,

  "2016-01": 9121806,
  "2016-02": 9121806,
  "2016-03": 9121806,
  "2016-04": 9121806,
  "2016-05": 9121806,
  "2016-06": 9121806,
  "2016-07": 9121806,
  "2016-08": 9121806,
  "2016-09": 9121806,
  "2016-10": 9121806,
  "2016-11": 9121806,
  "2016-12": 9121806,

  "2017-01": 9121806,
  "2017-02": 9121806,
  "2017-03": 9121806,
  "2017-04": 9121806,
  "2017-05": 9121806,
  "2017-06": 9121806,
  "2017-07": 9121806,
  "2017-08": 9121806,
  "2017-09": 9121806,
  "2017-10": 9121806,
  "2017-11": 9121806,
  "2017-12": 9349851,

  "2018-01": 9349851,
  "2018-02": 9349851,
  "2018-03": 9349851,
  "2018-04": 9349851,
  "2018-05": 9349851,
  "2018-06": 9349851,
  "2018-07": 9349851,
  "2018-08": 9349851,
  "2018-09": 9349851,
  "2018-10": 9349851,
  "2018-11": 9349851,
  "2018-12": 9349851,

  "2019-01": 9349851,
  "2019-02": 9349851,
  "2019-03": 9349851,
  "2019-04": 9349851,
  "2019-05": 9349851,
  "2019-06": 9349851,
  "2019-07": 9349851,
  "2019-08": 9349851,
  "2019-09": 9349851,
  "2019-10": 9349851,
  "2019-11": 9349851,
  "2019-12": 9349851,

  "2020-01": 9349851,
  "2020-02": 9349851,
  "2020-03": 9349851,
  "2020-04": 9349851,
  "2020-05": 9349851,
  "2020-06": 9349851,
}

function main() {
  writeFile("./data/parlamento.dieta.json", JSON.stringify(dietaParlamentaria), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

main();
