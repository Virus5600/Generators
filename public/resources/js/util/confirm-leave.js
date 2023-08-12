/**
 * Warns the user that they're leaving without saving their changes.
 * @param urlTo String value. The page they're attempting to open.
 * @param title String value. Title of the confirmation.
 * @param message String value. Message of the confirmation.
 * @param isLivewire Boolean value. Whether the value of `urlTo` is a livewire event or not
 * @param livewireComponent Object value. Required whenever `isLivewire` is `true`. This identifies what component will call the provided livewire action
 */
function confirmLeave(urlTo, title = "Are you sure?", message = "You have unsave changes.", isLivewire = false, livewireComponent = null) {
	Swal.fire({
		icon: 'warning',
		html: `<h4>${title}</h4><p>${message}</p>`,
		showDenyButton: true,
		confirmButtonText: 'Yes',
		denyButtonText: 'No'
	}).then((result) => {
		if (result.isConfirmed) {
			if (isLivewire) {
				try {
					if (livewireComponent == undefined || livewireComponent == null)
						throw new Exception("");

					let params = urlTo.split(/,\s*/g);
					livewireComponent.call.apply(this, params);
				} catch (e) {
					console.warning("Livewire not installed, using default method");
					window.location.href = urlTo;
				}
			}
			else {
				window.location.href = urlTo;
			}
		}
	});
}

/**
 * Warns the user about the action they are doing.
 * @param title String value. Title of the confirmation.
 * @param message String value. Message of the confirmation.
 */
async function confirmAction(title = "Are you sure?", message = "This action is undoable") {
	let returnVal = false;

	await Swal.fire({
		icon: 'warning',
		html: `<h4>${title}</h4><p>${message}</p>`,
		showDenyButton: true,
		confirmButtonText: 'Yes',
		denyButtonText: 'No'
	}).then((result) => {
		if (result.isConfirmed)
			returnVal = true;
	});

	return returnVal;
}