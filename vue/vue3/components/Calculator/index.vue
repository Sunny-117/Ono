<template>
	<div>
		<cal-result :result="result" />
		<div class="inputs">
			<cal-input
        field="firstNumber"
        @dispatch="dispatch"
			/>
			<cal-input
        field="secondNumber"
        @dispatch="dispatch"
			/>
		</div>
		<div class="buttons">
			<cal-button
        innerText="+"
        method="plus"
        :curMethod="curMethod"
        @dispatch="dispatch"
			/>
			<cal-button
        innerText="-"
        method="minus"
        :curMethod="curMethod"
        @dispatch="dispatch"
			/>
			<cal-button
        innerText="*"
        method="mul"
        :curMethod="curMethod"
        @dispatch="dispatch"
			/>
			<cal-button
        innerText="/"
        method="div"
        :curMethod="curMethod"
        @dispatch="dispatch"
			/>
		</div>
	</div>
</template>

<script>
  
  import CalResult from './Result';
	import CalInput from './Input';
	import CalButton from './Button';

	import dispatch from '@/dispatchers/calculator';

	export default {
		name: 'Calculator',
		components: {
			CalResult,
			CalInput,
			CalButton
		},
		data () {
			return {
				firstNumber: 0,
				secondNumber: 0,
				curMethod: 'plus',
				result: 0
			}
		},
		methods: {
			dispatch (...args) {
				dispatch(this)(...args);
			}
		}
	}
</script>

<!-- result 0

input  input 

button * 4 -->