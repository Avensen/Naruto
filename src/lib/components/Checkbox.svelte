<script>
   export let label = ''
</script>

<fieldset class="space-y-5">
   <legend class="sr-only">Filters</legend>
   <div class="relative flex items-start">
     <div class="flex items-center h-5">
       <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded">
     </div>
     <div class="ml-3 text-sm">
       <label for="comments" class="font-medium text-gray-700">{label}</label>
       <!-- <span id="comments-description" class="text-gray-500"><span class="sr-only">New comments </span>so you always know what's happening.</span> -->
     </div>
   </div>
   
 </fieldset>
 