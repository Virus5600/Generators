export const DTR_SAMPLE =`
<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Rebecca D. Martin">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Deb A. Adkins">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Darrell R.  Flynn">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Cora L. Boyle">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Rachael O. Patton">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Joey Q. Short">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Alison Z. Farrell">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Roger I. Gardner">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Janice A. Barton">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>

<div class="dtr border border-black">
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7">DAILY TIME RECORD</div>
	</div>

	<!-- EMPLOYEE NAME -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="Justin B. Warren">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<!-- DATE PERIOD -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-3">For the period of:</div>
		<div class="dtr-cell dtr-cell-3 underline" data-dtr-period="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="August 1-15, 2023">
		</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<!-- REGULAR DAYS -->
		<div class="dtr-cell dtr-cell-2">Regular Days:</div>
		<div class="dtr-cell underline" data-dtr-days="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="10">
		</div>

		<!-- SATURDAYS -->
		<div class="dtr-cell dtr-cell-2">Saturdays:</div>
		<div class="dtr-cell underline" data-dtr-saturday="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="1">
		</div>
		
		<div class="dtr-cell"></div>
	</div>

	<!-- LINE BREAK -->
	<div class="dtr-row">
	</div>

	<div class="dtr-row" id="dtrHeader">
		<div class="dtr-cell"></div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black">LUNCH</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">IN</div>
		<div class="dtr-cell border small fst-italic fw-bold border-black">OUT</div>
		<div class="dtr-cell"></div>
	</div><div class="dtr-row" data-date="date-1">
		<div class="dtr-cell text-end px-1">1</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-2">
		<div class="dtr-cell text-end px-1">2</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-3">
		<div class="dtr-cell text-end px-1">3</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-4">
		<div class="dtr-cell text-end px-1">4</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-5">
		<div class="dtr-cell text-end px-1">5</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-6">
		<div class="dtr-cell text-end px-1">6</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-7">
		<div class="dtr-cell text-end px-1">7</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-8">
		<div class="dtr-cell text-end px-1">8</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-9">
		<div class="dtr-cell text-end px-1">9</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-10">
		<div class="dtr-cell text-end px-1">10</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-11">
		<div class="dtr-cell text-end px-1">11</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-12">
		<div class="dtr-cell text-end px-1">12</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-13">
		<div class="dtr-cell text-end px-1">13</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="08:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="12:00">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update="">BRK</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="01:00">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="05:00">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-14">
		<div class="dtr-cell text-end px-1">14</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-15">
		<div class="dtr-cell text-end px-1">15</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-16">
		<div class="dtr-cell text-end px-1">16</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-17">
		<div class="dtr-cell text-end px-1">17</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-18">
		<div class="dtr-cell text-end px-1">18</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-19">
		<div class="dtr-cell text-end px-1">19</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-20">
		<div class="dtr-cell text-end px-1">20</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-21">
		<div class="dtr-cell text-end px-1">21</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-22">
		<div class="dtr-cell text-end px-1">22</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-23">
		<div class="dtr-cell text-end px-1">23</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-24">
		<div class="dtr-cell text-end px-1">24</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-25">
		<div class="dtr-cell text-end px-1">25</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-26">
		<div class="dtr-cell text-end px-1">26</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-27">
		<div class="dtr-cell text-end px-1">27</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-28">
		<div class="dtr-cell text-end px-1">28</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-29">
		<div class="dtr-cell text-end px-1">29</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-30">
		<div class="dtr-cell text-end px-1">30</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row" data-date="date-31">
		<div class="dtr-cell text-end px-1">31</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small fst-italic fw-bold text-danger border-black" data-update=""></div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell border small border-black" data-update="">
			<input type="text" class="border-0 bg-transparent w-100 text-center text-black" value="">
		</div>

		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- JO SIGNATURE -->
	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline" data-dtr-name=""></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			I certify on my honour that the above is a true and
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			correct report of hours worked, recorded daily at
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			the time of arrival at and departure from the office.
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7"></div>
	</div>

	<!-- VERIFIED BY -->
	<div class="dtr-row">
		<div class="dtr-cell dtr-cell-7 small fst-italic text-center">
			Verified as to and per the prescribed office hours:
		</div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 underline"></div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fw-bold text-black" data-dtr-verifier="">Mr. Alfred D. Johns</div>
		<div class="dtr-cell"></div>
	</div>

	<div class="dtr-row">
		<div class="dtr-cell"></div>
		<div class="dtr-cell dtr-cell-5 small fst-italic text-black" data-dtr-verifier-position="">Person-In-Charge, M.I.S.S.</div>
		<div class="dtr-cell"></div>
	</div>
</div>
`;