<script lang="ts">
    export let options: any[] = [];
    export let display_func = (a: Record<string, any>) => a;
    export let index = 0;
    export let value: any;
    export let title: string;
    export let id: string;
    export let labelText: string;
  
    $: {
      value = options[index];
      console.log(value);
    }
  </script>
  <div class="select">
    <label for={id}>{labelText}</label>
    <select bind:value={index} {id} {title} >
        {#each options as option, i}
        <option value={i}><span class="option-item">{display_func(option)}</span></option>
        {/each}
    </select>
  </div>
  <style lang="scss">
    :root {
        --select-focus: blue;
        --select-arrow: var(--fg-300);
    }
    .select {
        display: grid;
        grid-template-areas: "label" "select";
        gap: 0.5rem;
        align-items: center;
        position: relative;

        select,
        &::after {
            grid-area: select;
        }
    }
    label {
        font-size: 1.25rem;
        font-weight: 500;
    }
    select {
        appearance: none;
        background-color: transparent;
        margin: 0;
        min-width: 15ch;
        max-width: 30ch;
        font-family: inherit;
        // Stack above custom arrow
        z-index: 1;
        // Remove dropdown arrow in IE10 & IE11
        // @link https://www.filamentgroup.com/lab/select-css.html
        &::-ms-expand {
            display: none;
        }
        // Remove focus outline, will add on alternate element
        outline: none;
        border: 2px solid var(--fg-300);
        border-radius: 0.5em;
        padding: 0.25em 0.5em;
        color: var(--fg-100);
        font-size: 1.25rem;
        cursor: pointer;
        line-height: 1.5rem;
        &::after {
            content: "";
            justify-self: end;
            width: 0.8em;
            height: 0.5em;
            background-color: var(--select-arrow);
            clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        }
        &:focus {
            border: 2px solid var(--select-focus);
            border-radius: 0.5rem;
        }
    }
    option {
        color: var(--fg-300);
        background-color: var(--bg-100);
        &:focus {
            color: var(--bg-100);
        }
    }
  </style>