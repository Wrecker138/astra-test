export default class serverApi {
    _apiUrl = 'http://sol-tst.herokuapp.com/api/v1/tasks/';

    getData = async () => {
        const res = await fetch(this._apiUrl);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${this._apiUrl}, received ${res.status}`)
        }
        return await res.json();
      };

    getTimerEnd = async() => {
        const res = await this.getData();
        return res.endsAt;
    }

    getTasks = async() => {
        const res = await this.getData();
        return res.tasks
    }
}