import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="vh-100 container">
      <div className="d-flex justify-content-center align-items-center h-100">
        <Button variant="primary" href="/exercise-one">Exercise One</Button>
      </div>
    </div>
  )
}