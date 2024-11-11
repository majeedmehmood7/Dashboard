import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
  <h1 className='heading'><i class="bi bi-house-fill"></i> Home</h1>

<div className='conatiner'>
    
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Request</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>
      Request
      </td>
      <td>
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">NO</label>
</div>
        </td>
      <td>
        <div className='btn'>
        <button className='btn btn-primary' type='submit'>A</button>
        <button className='btn btn-danger' type='submit'>R</button>
        <button className='btn btn-info' type='submit'>P</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Request</td>
      <td>

      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>

      </td>
      <td>
      <div className='btn'>
        <button className='btn btn-primary' type='submit'>A</button>
        <button className='btn btn-danger' type='submit'>R</button>
        <button className='btn btn-info' type='submit'>P</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Request</td>
      <td>
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
</div>
      </td>
      <td>
      <div className='btn'>
        <button className='btn btn-primary' type='submit'>A</button>
        <button className='btn btn-danger' type='submit'>R</button>
        <button className='btn btn-info' type='submit'>P</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Jacob</td>
      <td>
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
      </td>
      <td>
      <div className='btn'>
        <button className='btn btn-primary' type='submit'>A</button>
        <button className='btn btn-danger' type='submit'>R</button>
        <button className='btn btn-info' type='submit'>P</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

</div>
    </>
  )
}

export default Home