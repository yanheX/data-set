const {
  expect
} = require('chai');
const {
  DataSet,
  DataView,
  getTransform
} = require('../../../../index');

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    x: i,
    y: i
  });
}

describe('DataView.transform(): bin.hexagon', () => {
  const dataSet = new DataSet();
  let dataView;

  beforeEach(() => {
    dataView = new DataView(dataSet);
    dataView.source(data);
  });

  it('api', () => {
    expect(getTransform('bin.hexagon')).to.be.a('function');
    expect(getTransform('bin.hex')).to.be.a('function');
  });

  it('default', () => {
    dataView.transform({
      type: 'bin.hexagon',
      fields: [ 'x', 'y' ],
      as: [ '_x', '_y' ]
    });
  });
});

