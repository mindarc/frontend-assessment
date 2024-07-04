import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="vh-100 container">
      <div className="d-flex justify-content-center align-items-center h-100">
        <Button variant="primary" href="/exercise-one" className="mx-2">Exercise One</Button>
        <Button variant="dark" href="/exercise-two" className="mx-2">Exercise Two</Button>
      </div>
    </div>
  )
}