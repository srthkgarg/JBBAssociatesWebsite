/**
 * Created by Sarthak on 8/22/2018.
 * create a wrapper Worker to support worker classes usage by it's class.
 */
export default class WebWorker {
  /**
   *
   * @param worker
   * @returns {Worker}
   */
  constructor(worker) {
    const code = worker.toString();
    const blob = new Blob(['('+code+')()']);
    return new Worker(URL.createObjectURL(blob));
  }

}