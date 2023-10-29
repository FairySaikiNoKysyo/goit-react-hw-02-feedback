export const FeedBackOptions = ({onLeaveFeedback}) =>{
   
    return(
        
    <div>
        <h1>Leave me Feedback</h1>
        <button onClick={onLeaveFeedback} type="button" name="good">
        good
          </button>
          <button onClick={onLeaveFeedback} type="button" name="neutral">
        neutral
          </button>
          <button onClick={onLeaveFeedback} type="button" name="bad">
        bad
          </button>
    </div>
  )
}