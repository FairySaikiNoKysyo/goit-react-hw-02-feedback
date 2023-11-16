export const FeedBackOptions = ({onLeaveFeedback}) =>{
   
    return(
        
    <div>
       
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