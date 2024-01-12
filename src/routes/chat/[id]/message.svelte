
<script lang="ts">
    export let message:string;
    
    let current = new Date(); 
    let ampm = current.getHours() >= 12 ? 'pm' : 'am';
    let actualTime = (current.getHours()% 12 +':'+current.getMinutes() +' '+ ampm);
</script>

<div class="chat-content user">
    <div class="message-item">
        <div class="bubble">{message}</div>
        <div class="message-time">{actualTime}</div>
    </div>
</div>