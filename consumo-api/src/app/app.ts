import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { UserService } from './features/user/services/user.service';
import { UserModel } from './features/user/models/user.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	standalone: false,
	styleUrl: './app.scss'
})
export class App implements OnInit {

	constructor(
		private userService: UserService,
		private cdr: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this.userService.getAllUsers().subscribe({
			next: (users: UserModel[]) => {
				this.users = users;
				this.cdr.detectChanges();
			},
      error: () => {
      },
      complete: () => {},
		});
	}

	users: UserModel[] = [];

}
